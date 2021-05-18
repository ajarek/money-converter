const score = document.querySelector('.score')
const option = document.querySelectorAll('option')
const quantity = document.querySelector('#inp')
const selectTo = document.querySelector('#sel')
let quantityReed
let arr = []
let arr1 = []

fetch("waluta.json")

  .then(results => results.json())
  .then(function (json) {

    let obj = json.Cube
    obj.forEach((el, index) => {

      let money = el.currency
      let values = el.rate

      arr.push(money)
      arr1.push(values)

      selectTo.addEventListener('click', () => {
        if (selectTo.value == arr[index]) {
          if (quantity.value < 0) {
            quantity.value = 1
          } else
            score.innerHTML = '<i class="fas fa-cash-register"></i>' + arr1[index] * quantity.value;
        }

      })

      let options = document.createElement('option')
      options.setAttribute('id', 'sel1')
      options.setAttribute('value', money)
      options.setAttribute('data-val', values)
      options.classList.add('select')
      options.innerText = money
      selectTo.appendChild(options)

    })
  })