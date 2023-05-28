const bookings = JSON.parse('{{ bookings|safe }}')
console.log(bookings);

console.log('{{bookings|safe}}')
const pretty_json = JSON.stringify(bookings,null,2)
document.getElementById('bookings').innerHTML = pretty_json