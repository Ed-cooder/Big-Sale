document.addEventListener('DOMContentLoaded', function() {
  // Original price
  const originalPrice = 100;
  
  // Calculate discounted price
  const discountedPrice = originalPrice * 0.5; // 50% discount
  
  // Display discounted price
  document.getElementById('discountedPrice').textContent = 'R' + discountedPrice.toFixed(2);
});
