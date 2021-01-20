<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Ment Travel</title>
</head>
<body>

    <header id="header">

    </header>

    <div>
		@yield('contenido')
    </div>

    <script src="{{ mix('js/app.js') }}" type="text/javascript"></script>

</body>
</html>