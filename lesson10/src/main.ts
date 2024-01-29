import './css/style.css'


const initApp = ()=>{
    console.log("App initialized");
    const form = document.querySelector('form') as HTMLFormElement
    const input = document.querySelector('input') as HTMLInputElement

    
    form.addEventListener('submit',(e:SubmitEvent)=>{
        e.preventDefault();
        const input = document.querySelector('input') as HTMLInputElement

        console.log(input.value);
        
        
        input.value ='';
    })
    
}

document.addEventListener('DOMContentLoaded', initApp);