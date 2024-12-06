



function registerView(){

    return `<html><body>
    <h1>Formulaire enregistrement</h1>
    <form action="/Register" method="POST">
        <label for="name" class="block text-gray-700">Username</label>
        <input type="text" id="name" name="name"
                            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                            required>

        <label for="password" class="block text-gray-700">Password</label>
                        <input type="password" id="password" name="password"
                            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                            required>
    
        <button name="register" type="submit"
                            class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Register</button>
    </from>
    </body></html>`



}
module.exports = registerView