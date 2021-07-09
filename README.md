# Minesweeper

![Demo image](docs/demo.png?raw=true "Minesweeper")

## Installation

You can follow Sail guide in https://laravel.com/docs/8.x/sail

Docker Compose is required https://docs.docker.com/compose/install/

PHP 8.0 and Composer are also required https://getcomposer.org/download/

```bash
composer require laravel/sail --dev

php artisan sail:install

./vendor/bin/sail up -d
```

## Runing test

```bash
./vendor/bin/sail npm run test
```

## Decisions taken

At first, I applied for a Laravel/React position. later, in the interview, they told me that this position was on hold but there was an opening for React.

When I started the project I thought that the first thing to solve was to generate a board. So I took my notebook and started describing the board with paper and pencil.

Then, I created the project with Laravel in the backend thinking that I would need it to create an api later as described in the project statement. Also, I installed React for the frontend.

Finally, I created my board with raw data. A simple matrix with numbers representing the mines and adjacent mines count. I writed tests along with this service to be more comfortable with the solution. Furthermore, it didn't have any graphical interface to test it manually.

After that, I started writing a custom hook and a component with everything the game required. Eventually, I started dividing the code into more files to decrease the complexity of the elements.

I divided the problem into pieces and added them as features:
 * Cell states (covered, uncovered, flagged, exploted, question-mark). I didn't add all states at once
 * Reset button
 * Timer
 * Mine counter
 * Game state (won, lose, playing, new game)
 * Custom board dimensions
 * Miscellaneous
