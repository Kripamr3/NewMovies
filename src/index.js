class Main{
    

    constructor(){
        let consoleStyle = [
            'color: #9d00ff',
            'font-weight: bold',
            'font-style: italic',
            'font-size: 20px',
            'text-shadow: 1px 1px #a9a9a9'
        ].join(";");

        let renderArea = document.getElementById('renderArea');
        console.log("%c Welcome to Javascript ES6 Training", consoleStyle);
        renderArea.innerText = "Render Area";
    }
}

new Main();