allInput = document.querySelectorAll("input")

let [nom, cogn, mail, passw, r] = allInput

let butt = document.querySelector("button")



butt.addEventListener("click", (evento) => {
    evento.preventDefault()

    const data = {
        name: nom.value,
        lastname: cogn.value,
        email: mail.value,
        password: "$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi",
        role_id: r.value

    }
    
    fetch('https://sofin.wp-admin.it/public/api/v1/user',
    {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: nom.value,
            lastname: cogn.value,
            email: mail.value,
            password: "$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi",
            //nicename: 
        }),
    })
   
})


/*
fetch('https://sofin.wp-admin.it/public/api/v1/user',
     {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: "Marco",
            lastname: "Rossi",
            email: "tesdDSDSDSDssddst.shaylee@example.org",
            password: "$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi",
            role_id: 4
        }),
    })

    .then(response => response.json())
    .then(data => {
        console.log("Success:", data)
    })
*/

