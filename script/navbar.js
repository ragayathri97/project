const navbar = ()=>{
     let card = ` <div id="nav-container">
        <div class="flex-element">
            <a id="logo" href="index.html">My Personal App</a>

            <div id="nav-links">
                <a href="signup.html">Signup</a>
                <a href="login.html">Login</a>
                <a href="todods.html">Todos</a>
                <a href="expenses.html">Expenses</a>
            </div>
        </div>
    </div> `;

    document.getElementById("nav").innerHTML = card
};

navbar()
