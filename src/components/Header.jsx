import React from "react";

function Header(){
    return (
        <nav class="bg-primary p-4 flex justify-between items-center bg-orange-950">
            <div class="flex items-center space-x-2">
                <img src={`${process.env.PUBLIC_URL}/img/logo.png`} class="h-20 w-20"/>

            </div>

            <ul class="flex space-x-6 text-white text-center">
                <li><a href="#" class="hover:text-yellow-600">Home</a></li>
                <li><a href="#" class="hover:text-yellow-600">About Us</a></li>
                <li><a href="#" class="hover:text-yellow-600">Books</a></li>
                <li><a href="#" class="hover:text-yellow-600">Contact</a></li>
            </ul>

            <div class="flex space-x-4">
                <button class="bg-orange-500 rounded text-white px-3 py-3">Cart</button>
                <button class="bg-orange-500 rounded text-white px-3 py-3">Login</button>
            </div>
        </nav>
    );
}

export default Header;