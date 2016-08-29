# Chess Etudes

Tools and techs:

* `react` for UI, `redux` for store management
* `babel-register` hook to run ES6 on the server
* `webpack` with dev and hot middlewares to build and run the app
* `express` to do server rendering
* `react-dnd` to support drag-and-drop events (magic)
* `eslint` with `airbnb preset` to maintain consistent code style


Redux store architecture:

```
{
  board: {
    figures: [...]
  },
  palettes: {
    black: [...],
    white: [...]
  }
}
```

Core components:

* `common/App` - holds most of the logic, passes down event handlers
* `common/Board` - representaton of the chess board, rendering itself and all of the figures
* `common/BoardFigure` - wraps `Figure`, holds `DragSource` logic for figures on the board
* `common/BoardSquare` - `DropTarget` for `BoardFigure`s
* `common/PaletteFigure` - wraps `Figure`, holds `DragSource` logic for figures in the palette

### Known Issues

* Figure moving with the underlying square background-color in Chrome for unknown reason. Works great in Safari.
* Hard-coded 'KING' values
* No production build mode
* Some strange DnD issues

### Roadmap

* Save etudes in the localStorage or in the server database
* Routing to view single etudes by direct link
