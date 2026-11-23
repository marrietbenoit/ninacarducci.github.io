
document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.gallery')

  if (!gallery) return

  const images = [...gallery.querySelectorAll('.gallery-item')]
  const categories = [...new Set(
    images.map(image => image.dataset.galleryTag).filter(Boolean)
  )]

  let activeCategory = 'Tous'
  let activeIndex = 0

  // Create the category filters
  const filters = document.createElement('div')
  filters.className = 'tags-bar nav nav-pills my-4'
  filters.setAttribute('role', 'group')
  filters.setAttribute('aria-label', 'Filtrer les photographies')

  const buttons = ['Tous', ...categories]

  buttons.forEach(category => {
    const button = document.createElement('button')
    button.type = 'button'
    button.className = 'nav-link'
    button.textContent = category
    button.setAttribute('aria-pressed', String(category === 'Tous'))

    if (category === 'Tous') {
      button.classList.add('active', 'active-tag')
    }

    button.addEventListener('click', () => {
      activeCategory = category

      filters.querySelectorAll('button').forEach(item => {
        const isActive = item === button
        item.classList.toggle('active', isActive)
        item.classList.toggle('active-tag', isActive)
        item.setAttribute('aria-pressed', String(isActive))
      })

      updateGallery()
    })

    filters.appendChild(button)
  })

  gallery.prepend(filters)

  // Create the responsive image grid
  const grid = document.createElement('div')
  grid.className = 'gallery-items-row row'

  images.forEach(image => {
    const column = document.createElement('div')
    column.className = 'item-column mb-4 col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4'

    image.classList.add('img-fluid')
    image.tabIndex = 0
    image.setAttribute('role', 'button')
    image.setAttribute('aria-label', `Agrandir : ${image.alt}`)

    column.appendChild(image)
    grid.appendChild(column)
  })

  gallery.appendChild(grid)

  // Return the images in the currently selected category
  function getVisibleImages() {
    return images.filter(image =>
      activeCategory === 'Tous' ||
      image.dataset.galleryTag === activeCategory
    )
  }

  // Show or hide images according to the selected filter
  function updateGallery() {
    images.forEach(image => {
      const visible =
        activeCategory === 'Tous' ||
        image.dataset.galleryTag === activeCategory

      image.parentElement.hidden = !visible
    })
  }

  // Create the Bootstrap lightbox
  const modal = document.createElement('div')
  modal.className = 'modal fade'
  modal.id = 'myAwesomeLightbox'
  modal.tabIndex = -1
  modal.setAttribute('aria-label', 'Photographie agrandie')

  modal.innerHTML = `
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-body position-relative">
          <button
  type="button"
  class="gallery-close"
  data-bs-dismiss="modal"
  aria-label="Fermer"
>&times;</button>

          <button
            type="button"
            class="mg-prev"
            aria-label="Photographie précédente"
          >&#10094;</button>

          <img
            class="lightboxImage img-fluid"
            src=""
            alt=""
          >

          <button
            type="button"
            class="mg-next"
            aria-label="Photographie suivante"
          >&#10095;</button>
        </div>
      </div>
    </div>
  `

  document.body.appendChild(modal)

  const lightboxImage = modal.querySelector('.lightboxImage')
  const previousButton = modal.querySelector('.mg-prev')
  const nextButton = modal.querySelector('.mg-next')

  const bootstrapModal = bootstrap.Modal.getOrCreateInstance(modal)

  // Display the selected image
  function showImage() {
    const visibleImages = getVisibleImages()
    const image = visibleImages[activeIndex]

    if (!image) return

    lightboxImage.src = image.currentSrc || image.src
    lightboxImage.alt = image.alt
  }

  // Open the lightbox
  function openLightbox(image) {
    const visibleImages = getVisibleImages()

    activeIndex = visibleImages.indexOf(image)

    if (activeIndex === -1) return

    showImage()
    bootstrapModal.show()
  }

  // Navigate to the previous image
  function previousImage() {
    const visibleImages = getVisibleImages()

    if (!visibleImages.length) return

    activeIndex =
      (activeIndex - 1 + visibleImages.length) % visibleImages.length

    showImage()
  }

  // Navigate to the next image
  function nextImage() {
    const visibleImages = getVisibleImages()

    if (!visibleImages.length) return

    activeIndex = (activeIndex + 1) % visibleImages.length

    showImage()
  }

  // Add image click and keyboard interactions
  images.forEach(image => {
    image.addEventListener('click', () => openLightbox(image))

    image.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        openLightbox(image)
      }
    })
  })

  previousButton.addEventListener('click', previousImage)
  nextButton.addEventListener('click', nextImage)

  // Allow navigation with keyboard arrows
  modal.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      previousImage()
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault()
      nextImage()
    }
  })

  // Clear the image when the lightbox closes
  modal.addEventListener('hidden.bs.modal', () => {
    lightboxImage.removeAttribute('src')
  })

  // Display the gallery
  updateGallery()
  gallery.style.display = 'block'
})
