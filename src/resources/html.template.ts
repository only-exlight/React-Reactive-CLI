export const HTML = (name: string) => `
<!DOCTYPE html>
<html lang="en">

<head>
    <base href="/">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <title>${name}</title>
</head>

<body>
    <div id="root"></div>
</body>

</html>
`;
