const navbar = ()=>{
     let card = ` <div id="nav-container">
        <div class="flex-element">
            <div id="logo">My Personal App</div>
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
