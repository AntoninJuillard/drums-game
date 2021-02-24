// variables of containers
const container = document.querySelector('.container')
const bottomArea = container.querySelector('.bottom-area')
const bottomLeftArea = bottomArea.querySelector('.bottom-left-area')
const topArea = container.querySelector('.top-area')
const musicVolumeArea = topArea.querySelector('.music-volume')
const musicPlayer = topArea.querySelector('.music-player')
const information = bottomArea.querySelector('.information')

// boxes/ buttons in the html
const kickBoxes = Array.from(bottomLeftArea.querySelectorAll('.kick-box'))
const hatsBoxes = Array.from(bottomLeftArea.querySelectorAll('.hats-box'))
const clapBoxes = Array.from(bottomLeftArea.querySelectorAll('.clap-box'))
const snareBoxes = Array.from(bottomLeftArea.querySelectorAll('.snare-box'))
const drumBoxes = Array.from(bottomLeftArea.querySelectorAll('.drum-box'))
const pianoBoxes = Array.from(bottomArea.querySelectorAll('.piano-box'))
const vocalBoxes = Array.from(bottomArea.querySelectorAll('.vocal-box'))


// part to create the background 
// prevents from having 2000 lines of html

const backgroundContainer = container.querySelector('.background')

// generate 1953 block
for(let i = 0; i<1953 ; i++)
{   
    const backgroundBlock = document.createElement('p')
    backgroundBlock.classList.add('background-block')
    backgroundContainer.appendChild(backgroundBlock)
}


// volume of all the sounds
let volume = 1

// sounds arrays
const kickSounds = 
[
    new Audio('sounds/HouseKick01.mp3'),
    new Audio('sounds/HouseKick02.mp3'),
    new Audio('sounds/HouseKick03.mp3'),
    new Audio('sounds/HouseKick04.mp3'),
    new Audio('sounds/HouseKick05.mp3'),
    new Audio('sounds/HouseKick06.mp3'),
    new Audio('sounds/HouseKick07.mp3'),
    new Audio('sounds/HouseKick08.mp3')
]

const hatSounds = 
[
    new Audio('sounds/HouseHiHat01.mp3'),
    new Audio('sounds/HouseHiHat02.mp3'),
    new Audio('sounds/HouseHiHat03.mp3'),
    new Audio('sounds/HouseHiHat04.mp3'),
    new Audio('sounds/HouseHiHat05.mp3'),
    new Audio('sounds/HouseHiHat06.mp3'),
    new Audio('sounds/HouseHiHat07.mp3'),
    new Audio('sounds/HouseHiHat08.mp3')
]

const clapSounds = 
[
    new Audio('sounds/HouseClap01.mp3'),
    new Audio('sounds/HouseClap02.mp3'),
    new Audio('sounds/HouseClap03.mp3'),
    new Audio('sounds/HouseClap04.mp3'),
    new Audio('sounds/HouseClap05.mp3'),
    new Audio('sounds/HouseClap06.mp3'),
    new Audio('sounds/HouseClap07.mp3'),
    new Audio('sounds/HouseClap08.mp3')
]

const snareSounds = 
[
    new Audio('sounds/HouseSnare01.mp3'),
    new Audio('sounds/HouseSnare02.mp3'),
    new Audio('sounds/HouseSnare03.mp3'),
    new Audio('sounds/HouseSnare04.mp3'),
    new Audio('sounds/HouseSnare05.mp3'),
    new Audio('sounds/HouseSnare06.mp3'),
    new Audio('sounds/HouseSnare07.mp3'),
    new Audio('sounds/HouseSnare08.mp3')
]

const pianoSounds = 
[
    new Audio('sounds/piano01.mp3'),
    new Audio('sounds/piano02.mp3'),
    new Audio('sounds/piano03.mp3'),
    new Audio('sounds/piano04.mp3'),
    new Audio('sounds/piano05.mp3'),
    new Audio('sounds/piano06.mp3'),
    new Audio('sounds/piano07.mp3'),
    new Audio('sounds/piano08.mp3')
]

const vocalSounds = 
[
    new Audio('sounds/vocal01.mp3'),
    new Audio('sounds/vocal02.mp3'),
    new Audio('sounds/vocal03.mp3'),
    new Audio('sounds/vocal04.mp3'),
    new Audio('sounds/vocal05.mp3'),
    new Audio('sounds/vocal06.mp3'),
    new Audio('sounds/vocal07.mp3'),
    new Audio('sounds/vocal08.mp3')
]

// variables about beats boxes/button

const playButtonDisplay = topArea.querySelector('.play-button-icon')
const pauseButtonDisplay = topArea.querySelector('.pause-button-icon')
const timeBar = topArea.querySelector('.time-bar')



// initialising sounds addable on the player
// 'selected' variables allow to know which sound and wich box has been clicked on last
let selectedKick = kickSounds[1]
let selectedClap = clapSounds[1]
let selectedHat = hatSounds[0]
let selectedSnare = snareSounds[3]


// add images on boxes/buttons
let selectedKickBox 
let selectedClapBox
let selectedHatBox
let selectedSnareBox
let selectedPianoBox
let selectedVocalBox

// variables to put the image only on the last clicked box
const SoundSelected = document.createElement('img')
SoundSelected.classList.add('sound-selected')
SoundSelected.src = 'images/mediaon.png'

const SoundSelectedB = document.createElement('img')
SoundSelectedB.classList.add('sound-selected')
SoundSelectedB.src = 'images/mediaon.png'

const SoundSelectedC = document.createElement('img')
SoundSelectedC.classList.add('sound-selected')
SoundSelectedC.src = 'images/mediaon.png'

const SoundSelectedD = document.createElement('img')
SoundSelectedD.classList.add('sound-selected')
SoundSelectedD.src = 'images/mediaon.png'

const pianoSelectedImg = document.createElement('img')
pianoSelectedImg.classList.add('piano-loop-img')
pianoSelectedImg.src = 'images/replaying.png'

const vocalSelectedImg = document.createElement('img')
vocalSelectedImg.classList.add('vocal-loop-img')
vocalSelectedImg.src = 'images/disk.png'


// function to play any sound
const playSounds = (sound) => 
{
    sound.currentTime = 0
    sound.play()
    sound.volume = volume
    console.log(volume);
}



// function to play the kick animation (moving)
const kickAnimation = () => 
{
    container.style.animationName = 'wiggle'
    window.setTimeout(() => {
        container.style.animationName = ''
    }, 200)
}


// function to play the clap animation (flashing)
const clapAnimation = () => 
{
    container.style.background = '#ffffff'
    window.setTimeout(() => {
        container.style.background = '#848584'
    }, 45)
}

// function to play the snare animation 
const snareAnimation = () => 
{
    backgroundContainer.style.opacity = '0.1'
    window.setTimeout(() => {
        backgroundContainer.style.opacity = '0.05'
    }, 55)
}





// loop and eventlisteners to make boxes play the sounds
for(let i=0; i<kickBoxes.length; i++)
{

    kickBoxes[i].addEventListener('click', () => 
    {
        kickAnimation()
        playSounds(kickSounds[i])
        selectedKick = kickSounds[i]
        selectedKickBox = kickBoxes[i]
        selectedKickBox.appendChild(SoundSelected)      
    })

    hatsBoxes[i].addEventListener('click', () => 
    {
        playSounds(hatSounds[i])
        selectedHat = hatSounds[i]
        selectedHatBox = hatsBoxes[i]
        selectedHatBox.appendChild(SoundSelectedB)
    })

    clapBoxes[i].addEventListener('click', () => 
    {
        clapAnimation()
        playSounds(clapSounds[i])
        selectedClap = clapSounds[i]
        selectedClapBox = clapBoxes[i]
        selectedClapBox.appendChild(SoundSelectedC)
    })

    snareBoxes[i].addEventListener('click', () => 
    {
        snareAnimation()
        playSounds(snareSounds[i])
        selectedSnare = snareSounds[i]
        selectedSnareBox = snareBoxes[i]
        selectedSnareBox.appendChild(SoundSelectedD)
    })

    pianoBoxes[i].addEventListener('click', () => 
    {
        for(let f=0;f<pianoSounds.length;f++)
        {
            pianoSounds[f].pause()
            pianoSounds[f].loop = false
            
        }
        if(selectedPianoBox == pianoBoxes[i])
        {
            
            pianoSounds[i].pause()
            pianoSounds[i].loop = false
            selectedPianoBox.removeChild(pianoSelectedImg)
            selectedPianoBox = ''
        }
        else
        {
            playSounds(pianoSounds[i])

            // interval to check for volume change
            setInterval(() => {
                pianoSounds[i].volume = volume
            }, 350)
            
            pianoSounds[i].loop = true
            selectedPianoBox = pianoBoxes[i]
            selectedPianoBox.appendChild(pianoSelectedImg)
        }
    })

    vocalBoxes[i].addEventListener('click', () => 
    {
        for(let f=0;f<vocalSounds.length;f++)
        {
            vocalSounds[f].pause()
            vocalSounds[f].loop = false
        }

        if(selectedVocalBox == vocalBoxes[i])
        {
            vocalSounds[i].pause()
            vocalSounds[i].loop = false
            selectedVocalBox.removeChild(vocalSelectedImg)
            selectedVocalBox = ''
        }
        else
        {
            playSounds(vocalSounds[i])

            // interval to check for volume change
            setInterval(() => 
            {
                vocalSounds[i].volume = volume 
            }, 350)
            
            vocalSounds[i].loop = true
            selectedVocalBox = vocalBoxes[i]
            selectedVocalBox.appendChild(vocalSelectedImg)
        }
    })
}




//  variables for music volume area

const lessVolumeButton = musicVolumeArea.querySelector('.less-button')
const moreVolumeButton = musicVolumeArea.querySelector('.more-button')
const volumeDisplay = musicVolumeArea.querySelector('.percentage-display')

const volumeBarContainer = musicVolumeArea.querySelector('.music-volume-bar')
const volumeBarDisplay = musicVolumeArea.querySelector('.music-volume-progress')
const soundOffButton = musicVolumeArea.querySelector('.sound-off')
const soundOnButton = musicVolumeArea.querySelector('.sound-on')
let volumeBarPercentage = 0
let volumeDisplayScore = 100



// mute/demute sound 
soundOffButton.addEventListener('click', () => 
{
    soundOffButton.style.display = 'none'
    soundOnButton.style.display = 'block'
    volume = 1
    volumeBarPercentage = 0
    volumeBarDisplay.style.marginTop = `${volumeBarPercentage}px`
    volumeDisplayScore = 100
    volumeDisplay.textContent = volumeDisplayScore + '%'
})

soundOnButton.addEventListener('click', () => 
{
    soundOnButton.style.display = 'none'
    soundOffButton.style.display = 'block'
    volume = 0
    volumeBarPercentage = 200
    volumeBarDisplay.style.marginTop = `${volumeBarPercentage}px`
    volumeDisplayScore = 0
    volumeDisplay.textContent = volumeDisplayScore + '%'

})



// volume up and down functions

// volume go down function
function volumeDown() 
{
    if(volume < 0.05 && volume > 0)
    {
        volume = 0
        volumeDisplayScore = 0
        volumeDisplay.textContent = `${volumeDisplayScore}%`
        volumeBarDisplay.style.marginTop = '200px'
    }
    else if(volume <= 0 || volumeDisplayScore <= 0)
    {
        volume = 0
        volumeDisplayScore = 0
    }
    else
    {
        volume -= 0.05
        volumeBarPercentage +=10
        volumeBarDisplay.style.marginTop = `${volumeBarPercentage}px`
        volumeDisplayScore -= 5
        volumeDisplay.textContent = `${volumeDisplayScore}%`
    }
}

// volume go up function
function volumeUp() 
{
    if(volume > 0.95 && volume < 1)
    {
        volume = 1
        volumeDisplayScore = 100
        volumeDisplay.textContent = `${volumeDisplayScore}%`
        volumeBarDisplay.style.marginTop = '0px'
    }
    else if(volume >= 1 || volumeDisplayScore >= 100)
    {
        volume = 1
        volumeDisplayScore = 100
    }
    else
    {
        volume += 0.05
        volumeBarPercentage -=10
        volumeBarDisplay.style.marginTop = `${volumeBarPercentage}px`
        volumeDisplayScore += 5
        volumeDisplay.textContent = `${volumeDisplayScore}%`
    }
}


lessVolumeButton.addEventListener('mousedown', volumeDown)
moreVolumeButton.addEventListener('mousedown', volumeUp)
window.addEventListener('keydown', (event) => 
{
    if(event.keyCode == 38)
    {
        volumeUp()
    }
    if(event.keyCode == 40)
    {
        volumeDown()
    }
})


// allowing to change volume by clicking on the bar
volumeBarContainer.addEventListener('click', (event) => 
{
    // getting dimensions of the volume bar
    volumeBarTop = volumeBarContainer.getBoundingClientRect().y
    volumeBarHeight = volumeBarContainer.getBoundingClientRect().height
    volumeBarBottom = volumeBarTop + volumeBarHeight

    // getting cursor position on the Y axes (vertical)
    const cursorY = event.clientY

    // finding the distance between bar bottom/top and cursor
    const distanceBottom = Math.abs(volumeBarBottom - cursorY)
    const distanceTop = Math.abs(volumeBarTop - cursorY)
    // convert the distance to % 
    const distanceBottomPercentage = Math.floor((distanceBottom / volumeBarHeight) * 100)

    // preventing from bugging when under 10% or at 100%
    if(distanceBottomPercentage < 10)
    {
        volume = distanceBottomPercentage / 100
    }
    else if(distanceBottomPercentage >= 100)
    {
        volume = 1
    }
    else 
    {
        volume = distanceBottomPercentage * 0.01
    }

    // changing the text on top of the bar
    volumeDisplayScore = distanceBottomPercentage
    volumeDisplay.textContent = `${volumeDisplayScore}%`
    
    // changing the progression bar
    volumeBarPercentage = distanceTop
    volumeBarDisplay.style.marginTop = `${volumeBarPercentage}px`
})
// end of volume part





// accessing cells of the player : the tiles
const musicTiles = 
[
    Array.from(musicPlayer.querySelectorAll('.music-tiles-kick')),
    Array.from(musicPlayer.querySelectorAll('.music-tiles-clap')),
    Array.from(musicPlayer.querySelectorAll('.music-tiles-hat')),
    Array.from(musicPlayer.querySelectorAll('.music-tiles-snare'))
]
// reminder : to access double array : musicTiles[0][0] 




// allowing to put sound on the player
for(let i=0;i<musicTiles[0].length;i++)
{
    // kick
    musicTiles[0][i].addEventListener('click', () => 
    {  
        if(musicTiles[0][i].classList.contains('kick-clicked'))
        {
            musicTiles[0][i].classList.remove('kick-clicked')
        }
        else
        {
            musicTiles[0][i].classList.add('kick-clicked')
            playSounds(selectedKick)
        }
    })

    // clap
    musicTiles[1][i].addEventListener('click', () => 
    {  
        if(musicTiles[1][i].classList.contains('clap-clicked'))
        {
            musicTiles[1][i].classList.remove('clap-clicked')
        }
        else 
        {
            musicTiles[1][i].classList.add('clap-clicked')
            playSounds(selectedClap)
        }
    })

    // hat
    musicTiles[2][i].addEventListener('click', () => 
    {  
        if(musicTiles[2][i].classList.contains('hat-clicked'))
        {
            musicTiles[2][i].classList.remove('hat-clicked')
        }
        else
        {
            musicTiles[2][i].classList.add('hat-clicked')
            playSounds(selectedHat)
        }
    })

    // snare
    musicTiles[3][i].addEventListener('click', () => 
    {  
        if(musicTiles[3][i].classList.contains('snare-clicked'))
        {
            musicTiles[3][i].classList.remove('snare-clicked')
        }
        else
        {
            musicTiles[3][i].classList.add('snare-clicked')
            playSounds(selectedSnare)
        }
    })
}




let playerOn = true

// listeners to stop or play the player
const playPlayer = function playPlayer()
{
    playButtonDisplay.style.display = 'none'
    pauseButtonDisplay.style.display = 'block'
    timeBar.style.animationName = 'playthesounds'
    playMusic()
    playMusicInterval = setInterval(() => {
        playMusic()
    }, playerParcour)
    playerOn = true
}

const stopPlayer = function stopPlayer()
{
    pauseButtonDisplay.style.display = 'none'
    playButtonDisplay.style.display = 'block'
    timeBar.style.animationName = 'none'
    timeBar.style.opacity = '0.15'
    clearInterval(playMusicInterval)
    playerOn = false
}



// play the player 
playButtonDisplay.addEventListener('click',playPlayer)
// stop the player
pauseButtonDisplay.addEventListener('click',stopPlayer)


// variables for bpm

// total time of a player pass
let playerParcour = 2000
// every little column of the array is 1/16th of the player 
let columnPass = playerParcour/16

let columnCount = 0

// mega loop to make sounds play at the right time compared to the BPM(beat per minute)
function playMusic()
{
    for(let i=0;i<16;i++)
    {
        window.setTimeout(()=>
        {
            columnCount++
            if(columnCount >= 16)
            {
                columnCount = 0
            }
            
            if(musicTiles[0][i].classList.contains('kick-clicked'))
            {
                playSounds(selectedKick)
            }
            if(musicTiles[1][i].classList.contains('clap-clicked'))
            {
                playSounds(selectedClap)
            }
            if(musicTiles[2][i].classList.contains('hat-clicked'))
            {
                playSounds(selectedHat)
            }
            if(musicTiles[3][i].classList.contains('snare-clicked'))
            {
                playSounds(selectedSnare)
            }
         }, i * (columnPass + 1))
    }
}




// interval to play the loop (the player)
let playMusicInterval = setInterval(() => {
    playMusic()
}, playerParcour)




//  part to slow or fasten the bpm

// variables to acces bmp display and buttons
const bpmDisplay = topArea.querySelector('.bpm-display')
const lessBpmButton = topArea.querySelector('.bpm-less')
const moreBpmButton = topArea.querySelector('.bpm-more')
let bpmCount = 120
let barRunTime = 2


// function to slow bpm
lessBpmButton.addEventListener('click', () => 
{
    if(bpmCount <= 60)
    {
        bpmCount = 60
        bpmDisplay.textContent = bpmCount
    }
    else
    {
        // displaying changed bpm
        bpmCount -= 10
        bpmDisplay.textContent = bpmCount
        // slowing the bmp 
        playerParcour += 333.333332
        columnPass = playerParcour/16
        // slowing the animation
        barRunTime += 0.333333
        timeBar.style.animationDuration = `${barRunTime}s`
        stopPlayer()
        playPlayer()
    }   
})

// function to fasten bpm
moreBpmButton.addEventListener('click', () => 
{
    if(bpmCount >= 160)
    {
        bpmCount = 160
        bpmDisplay.textContent = bpmCount
    }
    else
    {
        //  displaying changed bpm  
        bpmCount += 10
        bpmDisplay.textContent = bpmCount
        // fastening the bmp 
        playerParcour -= 333.333332
        columnPass = playerParcour/16
        // fasteing the bar animation
        barRunTime -= 0.333333
        timeBar.style.animationDuration = `${barRunTime}s`
        stopPlayer()
        playPlayer()
    
    }
})






//  clear Button to clear all tiles on the player
const clearButton = topArea.querySelector('.clear-button')

const clearPlayer = () => 
{
    for(let j=0;j<17-1;j++)
    {
        musicTiles[0][j].classList.remove('kick-clicked')
        musicTiles[1][j].classList.remove('clap-clicked')
        musicTiles[2][j].classList.remove('hat-clicked')
        musicTiles[3][j].classList.remove('snare-clicked')
    }

}

clearButton.addEventListener('click', () => 
{
    clearPlayer()
})


// models part

// accessing button to create models
const modelsButton = topArea.querySelector('.models-title')


// all the models disposition functions are in this array
const models = 
[

    modelOne = () =>
    {
        musicTiles[0][1].classList.add('kick-clicked')
        musicTiles[0][8].classList.add('kick-clicked')
        musicTiles[0][11].classList.add('kick-clicked')
        musicTiles[0][15].classList.add('kick-clicked')

        musicTiles[1][4].classList.add('clap-clicked')
        musicTiles[1][12].classList.add('clap-clicked')

        musicTiles[2][0].classList.add('hat-clicked')
        musicTiles[2][1].classList.add('hat-clicked')
        musicTiles[2][4].classList.add('hat-clicked')
        musicTiles[2][6].classList.add('hat-clicked')
        musicTiles[2][8].classList.add('hat-clicked')
        musicTiles[2][10].classList.add('hat-clicked')
        musicTiles[2][12].classList.add('hat-clicked')
        musicTiles[2][14].classList.add('hat-clicked') 
    },

    modelTwo = () =>
    {
        musicTiles[0][0].classList.add('kick-clicked')
        musicTiles[0][7].classList.add('kick-clicked')

        musicTiles[1][4].classList.add('clap-clicked')
        musicTiles[1][12].classList.add('clap-clicked')

        musicTiles[2][2].classList.add('hat-clicked')
        musicTiles[2][6].classList.add('hat-clicked')
        musicTiles[2][10].classList.add('hat-clicked')
        musicTiles[2][15].classList.add('hat-clicked')

        musicTiles[3][14].classList.add('snare-clicked')
    },

    modelThree = () =>
    {
        musicTiles[0][0].classList.add('kick-clicked')
        musicTiles[0][4].classList.add('kick-clicked')
        musicTiles[0][8].classList.add('kick-clicked')
        musicTiles[0][12].classList.add('kick-clicked')

        musicTiles[1][4].classList.add('clap-clicked')
        musicTiles[1][12].classList.add('clap-clicked')
    },

    modelFour = () =>
    {
        musicTiles[0][0].classList.add('kick-clicked')
        musicTiles[0][7].classList.add('kick-clicked')
        musicTiles[0][9].classList.add('kick-clicked')
        musicTiles[0][10].classList.add('kick-clicked')
        musicTiles[0][13].classList.add('kick-clicked')

        musicTiles[1][4].classList.add('clap-clicked')
        musicTiles[1][12].classList.add('clap-clicked')
        musicTiles[1][15].classList.add('clap-clicked')

        musicTiles[2][0].classList.add('hat-clicked')
        musicTiles[2][1].classList.add('hat-clicked')
        musicTiles[2][3].classList.add('hat-clicked')
        musicTiles[2][4].classList.add('hat-clicked')
        musicTiles[2][5].classList.add('hat-clicked')
        musicTiles[2][7].classList.add('hat-clicked')
        musicTiles[2][8].classList.add('hat-clicked')
        musicTiles[2][9].classList.add('hat-clicked')
        musicTiles[2][11].classList.add('hat-clicked')
        musicTiles[2][12].classList.add('hat-clicked')
        musicTiles[2][13].classList.add('hat-clicked')
        musicTiles[2][15].classList.add('hat-clicked')

        musicTiles[3][2].classList.add('snare-clicked')
        musicTiles[3][6].classList.add('snare-clicked')
        musicTiles[3][10].classList.add('snare-clicked')
        musicTiles[3][14].classList.add('snare-clicked')
    },

    modelFive = () =>
    {
        musicTiles[0][0].classList.add('kick-clicked')
        musicTiles[0][4].classList.add('kick-clicked')
        musicTiles[0][8].classList.add('kick-clicked')
        musicTiles[0][12].classList.add('kick-clicked')

        musicTiles[1][4].classList.add('clap-clicked')
        musicTiles[1][12].classList.add('clap-clicked')

        musicTiles[2][2].classList.add('hat-clicked')
        musicTiles[2][6].classList.add('hat-clicked')
        musicTiles[2][10].classList.add('hat-clicked')
        musicTiles[2][14].classList.add('hat-clicked')
    },

    modelSix = () =>
    {
        musicTiles[0][0].classList.add('kick-clicked')
        musicTiles[0][4].classList.add('kick-clicked')
        musicTiles[0][8].classList.add('kick-clicked')
        musicTiles[0][12].classList.add('kick-clicked')
        musicTiles[0][15].classList.add('kick-clicked')

        musicTiles[1][4].classList.add('clap-clicked')
        musicTiles[1][12].classList.add('clap-clicked')

        musicTiles[2][0].classList.add('hat-clicked')
        musicTiles[2][1].classList.add('hat-clicked')
        musicTiles[2][2].classList.add('hat-clicked')
        musicTiles[2][3].classList.add('hat-clicked')
        musicTiles[2][4].classList.add('hat-clicked')
        musicTiles[2][5].classList.add('hat-clicked')
        musicTiles[2][6].classList.add('hat-clicked')
        musicTiles[2][7].classList.add('hat-clicked')
        musicTiles[2][8].classList.add('hat-clicked')
        musicTiles[2][9].classList.add('hat-clicked')
        musicTiles[2][10].classList.add('hat-clicked')
        musicTiles[2][11].classList.add('hat-clicked')
        musicTiles[2][12].classList.add('hat-clicked')
        musicTiles[2][13].classList.add('hat-clicked')
        musicTiles[2][14].classList.add('hat-clicked')
        musicTiles[2][15].classList.add('hat-clicked')
    }

]



// function to put a random model between all of the array on the player while removing everything
// that was already on it
modelsButton.addEventListener('click', () => 
{
    clearPlayer()
    models[Math.floor(Math.random()*models.length)]()
})



// part to play sounds with keyboard || put sound on player with keys
window.addEventListener('keydown',(event) => 
{
    if(event.keyCode === 70)
    {
        playSounds(selectedKick)
        if(playerOn === true)
        {
            musicTiles[0][columnCount-1].classList.add('kick-clicked')
        }
    }
    if(event.keyCode === 75)
    {
        playSounds(selectedSnare)
        snareAnimation()
        if(playerOn === true)
        {
            musicTiles[3][columnCount-1].classList.add('snare-clicked')
        }
    }
    if(event.keyCode === 76)
    {
        playSounds(selectedHat)
        if(playerOn === true)
        {
            musicTiles[2][columnCount-1].classList.add('hat-clicked')
        }
    }
    if(event.keyCode === 77)
    {
        playSounds(selectedClap)
        if(playerOn === true)
        {
            musicTiles[1][columnCount-1].classList.add('clap-clicked')
        }
    }
})

// displaying the information page after a little time passed

window.setTimeout(() => 
{
    information.style.display = 'flex'
}, 19600)

const informationEscapeButton = information.querySelector('.information-escape')

informationEscapeButton.addEventListener('click', () => 
{
    information.style.display = 'none'
})




// the effects part [try]

const bassButton = bottomArea.querySelector('.bass')
const trebleButton = bottomArea.querySelector('.treble')


// creating sound variable before initialising for the scope
let sound
// adding a interacted variable because everything can bug without it
let interacted = false
// variable to allow the sound to replay when it is over / without it sound never stop
let soundStop = false

// function to create any note
let createSound = (frequency) => 
{   
    // creating a "context" for the sound
    soundCtx = new (window.AudioContext)
    // volume of the audio context
    soundVolume = soundCtx.createGain()
    soundVolume.gain.value = 0.09
    // connecting volume  to output
    soundVolume.connect(soundCtx.destination)
    // creating sound wave
    sound = soundCtx.createOscillator()
    sound.frequency.value = frequency
    sound.start(0)
}

// function to play any note
let playNote = (frequency) => 
{

    if(soundStop === false)
    {
        soundStop = true
        // creating the note
        createSound(frequency)
        // connecting the note to the output
        sound.connect(soundVolume)
    }

}

bassButton.addEventListener('mousedown', () => 
{
    playNote(103)
})
bassButton.addEventListener('mouseup', () => 
{
    // stopping sound
    soundStop = false
    sound.disconnect(soundVolume.destination)
})

trebleButton.addEventListener('mousedown', () => 
{
    playNote(400)
})
trebleButton.addEventListener('mouseup', () => 
{
    // stopping sound
    soundStop = false
    sound.disconnect(soundVolume.destination)
})