console.log('js Working')
const workoutContainer = document.querySelector('.workout-container')
const inputValue = document.querySelector('.inputFeild')
const searchBtn = document.querySelector('.search-btn')




    const getMuscleStuff = async () =>{
        workoutContainer.innerHTML = null
        console.log(inputValue.value)
        const headers = {
            'X-Api-Key': 'Tjt8o7zzIxhzZumnJzY5rQ==yzpfwlSGd26XxWJP'
        }
        const url = `https://api.api-ninjas.com/v1/exercises?muscle=${inputValue.value}`
        const res = await fetch(url, {
            method: "GET",
            headers: headers,
        })
        const data = await res.json()
        console.log(data)


        let exerciseList = document.createElement('ul')
        data.forEach(exercise => {
            console.log(exercise)
            console.log(exercise.name)
            let exerciseItem = document.createElement('li')
            exerciseItem.innerText = exercise.name
            exerciseItem.classList = 'exercise-item'
            console.log(exerciseItem)
            console.log(exerciseList)
            exerciseList.append(exerciseItem)
        });
        console.log(exerciseList)
        workoutContainer.append(exerciseList)
    }


searchBtn.addEventListener("click", getMuscleStuff)