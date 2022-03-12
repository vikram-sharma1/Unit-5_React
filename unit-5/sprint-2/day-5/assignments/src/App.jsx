import {Button} from './components/button'

function App() {

  return (
    <div className="App">
      <Button text="primary">Primary Button</Button>
        <Button text="default">Default Button</Button>
        <Button text="dashed">Dashed Button</Button>
        <Button text="text">Text Button</Button>
        <Button text="link">Link Button</Button>
    </div>
  );
}

export default App;