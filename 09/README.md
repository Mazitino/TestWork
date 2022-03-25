написать LineSplitStream - стрим, который принимает текстовые данные, а отдает их же, но уже построчно, например:

    const LineSplitStream = require('./LineSplitStream');
    const os = require('os');
    
    const lines = new LineSplitStream({
      encoding: 'utf-8',
    });
    
    function onData(line) {
      console.log(line);
    }
    
    lines.on('data', onData);
    
    lines.write(`первая строка${os.EOL}вторая строка${os.EOL}третья строка`);
    
    lines.end();

В результате выполнения кода выше функция onData будет вызвана три раза.

Символ переноса строки отличаются для разных операционных систем, в Windows - это \r\n, в Mac и Linux - \n. Для того, чтобы наш код работал корректно во всех операционных системах можно воспользоваться свойством os.EOL модуля os, которое будет содержать корректный символ для той ОС, на которой запущена программа.