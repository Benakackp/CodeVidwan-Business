//MENU TOGGLE BUTTON
 const toggleBtn = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const menuItems = menu.querySelectorAll('a, button');

    toggleBtn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });

    menuItems.forEach(item => {
      item.addEventListener('click', () => {
        // Only hide if screen is mobile size
        if (window.innerWidth < 640) {
          menu.classList.add('hidden');
        }
      });
    });

// AOS ANIMATION
AOS.init({
  duration: 1200,
  once: false,
});


// ACTIVITIES TAB SWITCH
function showTab(tab) {
  // Hide all text contents
  document.querySelectorAll('[id$="-content"]').forEach(el => el.classList.add('hidden'));

  // Show selected content
  document.getElementById(tab + '-content').classList.remove('hidden');

  // Reset all tab styles
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('text-orange-500', 'border-b-2', 'border-orange-500');
    btn.classList.add('text-gray-600');
  });

  // Apply active styles to the clicked tab
  const activeTab = document.getElementById('tab-' + tab);
  activeTab.classList.add('text-orange-500', 'border-b-2', 'border-orange-500');
  activeTab.classList.remove('text-gray-600');

  // Image switch
  const img = document.getElementById('tab-image');
  if (tab === 'courses') img.src = 'assets/activities/courses.jpg';
  else if (tab === 'workshops') img.src = 'assets/activities/workshop.png';
  else if (tab === 'co-curricular') img.src = 'assets/activities/co-curricular.jpg';
  
}
