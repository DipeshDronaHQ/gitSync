const data = [
  {
    fullname: "Maria Gerhold",
    email: "maria81@example.com",
    mobile: "+1 123-456-7890",
    _isSelected: false
  },
  {
    fullname: "Fermin Schumm",
    email: "fermin.schumm51@example.com",
    mobile: "+1 987-654-3210",
    _isSelected: false
  },
  {
    fullname: "Jalyn Labadie",
    email: "jalyn.labadie@example.com",
    mobile: "+44 20 7946 0958",
    _isSelected: false
  },
  {
    fullname: "Garrick Wayne",
    email: "garrick77@example.com",
    mobile: "+91 98765 43210",
    _isSelected: false
  },
  {
    fullname: "Candace Kunze",
    email: "candace.kunze@example.com",
    mobile: "+61 412 345 678",
    _isSelected: false
  },
  {
    fullname: "Salma Carroll",
    email: "salma.carroll@example.com",
    mobile: "+49 30 1234567",
    _isSelected: false
  }
];

function filterData(nameFilter, emailFilter , phoneFilter) {
  return data.filter(user => 
    (nameFilter ? user.fullname.toLowerCase().includes(nameFilter.toLowerCase()) : true) &&
    (emailFilter ? user.email.endsWith(emailFilter) : true) &&
    (phoneFilter ? user.mobile.startsWith(phoneFilter) : true)
  );
}

// Example usage
output = filterData(nameFilter, emailFilter , phoneFilter);


