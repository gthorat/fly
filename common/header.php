<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>
        <?php echo TITLE;?>
    </title>

    <?php echo '<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">' ?>

    <!-- https://material.io/tools/icons/?icon=question_answer&style=baseline -->
    <style>
        <?php include 'css/style.css'; ?>
    </style>

</head>

<body>
    <!-- HEADER -->
    <header>
        <a href="#" class="logo">FLY<small class="font-wt-300">chat</small>
            <i class="material-icons">question_answer</i>
        </a>
        <nav>
            <ul>
                <li id="headerLoginBtn">
                    <a href="" onclick="goToLoginFlow(); return false">
                        <i class="material-icons">vpn_key</i> Login
                    </a>
                </li>
                <li id="headerSignUpBtn">
                    <a href="" onclick="goToSignUpFlow(); return false">
                        <i class="material-icons">assignment_ind</i> SignUp
                    </a>
                </li>
                <li class="user-logged" id="userLogged">
                    <i class="material-icons">face</i>
                    <span>
                        Hi! user</br>
                        <a href="" class="btn-sign-out" id="btnSignOut" onclick="signOutAction(); return false">Sign
                            out</a>
                    </span>
                </li>
            </ul>
        </nav>
    </header>

    <!-- MAIN CONTENT -->