let play1
let play2
let scr1
let scr2
let count1 = 0
let count2 = 0
gameDraw = false
let empate
let turn

document.addEventListener('DOMContentLoaded', () => {
  let squares = document.querySelectorAll('.square')

  squares.forEach(square => {
    square.addEventListener('click', handleClick)
  })
})

// function player_name() {
//   let player1 = document.getElementById('player_1')
//   let player2 = document.getElementById('player_2')
//   play1 = prompt('Insira o nome do primeiro jogador : ')

//   while (play1 == '' || play1 == null) {
//     alert('Tá fazendo merda!!')
//     play1 = prompt('Insira a porra do nome : ')
//   }
//   player1.innerHTML = `<h2>${play1}</h2>`

//   play2 = prompt('Insira o nome do segundo jogador : ')
//   while (play2 == '' || play2 == null) {
//     alert('Continua fazendo merda!!')
//     play2 = prompt('Insira a porra do nome : ')
//   }
//   player2.innerHTML = `<h2>${play2}</h2>`
// }

// player_name()

function handleClick(event) {
  let square = event.target
  let position = square.id

  if (handleMove(position)) {
    setTimeout(() => {
      if (playerTime == 0) {
        alert('O jogo acabou - O vencedor foi o Player 1 ')
        score(playerTime)
        restartClick()
      } else {
        alert('O jogo acabou - O vencedor foi Player 2')
        score(playerTime)
        restartClick()
      }
    }, 30)
  }
  setTimeout(() => {
    gameDraw = draw()
    if (gameDraw == true) {
      alert('O jogo empatou')
      restartClick()
    }
  }, 30)
  updateSquare(position)
}

function updateSquare(position) {
  let square = document.getElementById(position.toString())
  let symbol = board[position]
  square.innerHTML = `<div class='${symbol}'></div`
  round()
}

function round() {
  turn = document.getElementById('round')
  if (playerTime == 0) {
    turn.innerHTML = `<span>Player 1 jogando...</span>`
  } else {
    turn.innerHTML = `<span>Player 2 jogando...</span>`
  }
}

// function restartClick() {
//   let squares = document.querySelectorAll('.square')
//   let btn = document.querySelector('.btn')
//   squares.forEach(square => {
//     let positions = square.id
//     let symbols = board[positions]

//     if (symbols != '') {
//       square.innerHTML = ''
//     }
//     RestartGame()
//   })
// }

function restartClick() {
  let squares = document.querySelectorAll('.square')
  squares.forEach(square => {
    let positions = square.id
    let symbols = board[positions]

    if (symbols != '') {
      square.innerHTML = ''
    }
  })
  turn.innerHTML = `<span>Player 1 jogando...</span>`
  RestartGame()
}

function score(win) {
  scr1 = document.getElementById('score1')
  scr2 = document.getElementById('score2')
  if (win == 0) {
    count1 = count1 + 1
    scr1.innerHTML = `<span>0${count1}</span>`
  } else {
    count2 = count2 + 1
    scr2.innerHTML = `<span>0${count2}</span>`
  }

  if (count1 < count2) {
    document.getElementById('score1').style.color = 'red'
    document.getElementById('score2').style.color = 'blue'
  } else {
    if (count1 > count2) {
      document.getElementById('score2').style.color = 'red'
      document.getElementById('score1').style.color = 'blue'
    } else {
      document.getElementById('score2').style.color = 'black'
      document.getElementById('score1').style.color = 'black'
    }
  }
}
function reset() {
  scr1 = document.getElementById('score1')
  scr2 = document.getElementById('score2')
  scr1.innerHTML = `<span>00</span>`
  scr2.innerHTML = `<span>00</span>`
  document.getElementById('score2').style.color = 'black'
  document.getElementById('score1').style.color = 'black'
  count1 = 0
  count2 = 0
  restartClick()
}

// function updateSquares() {
//   let squares = document.querySelectorAll('.square')

//   squares.forEach(square => {
//     let position = square.id
//     let symbol = board[position]

//     if (symbol != '') {
//       square.innerHTML = `<div class='${symbol}'></div`
//     }
//   })
// }
