function toggleExtendedView(thumbnail) {
  // Hide all extended views first
  var allExtendedViews = document.querySelectorAll('.extended-view');
  allExtendedViews.forEach(function(view) {
    view.style.display = 'none';
  });

  // Show the extended view corresponding to the clicked thumbnail
  var extendedView = thumbnail.querySelector('.extended-view');
  extendedView.style.display = 'block';
}

