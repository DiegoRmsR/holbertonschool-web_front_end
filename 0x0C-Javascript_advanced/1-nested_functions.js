const globalVariable = "welcome";
function outer() {
    alert(globalVariable);
    const course = "Holberton";
    function iner() {
        alert(`${globalVariable} ${course}`);
        const exclamation = "!";
        function inception() {
            alert(`${globalVariable} ${course}${exclamation}`);
        }
        inception();
    }
    iner();
}
outer();