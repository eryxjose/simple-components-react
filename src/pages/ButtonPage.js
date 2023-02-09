import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from "../components/Button";

function ButtonPage() {
  const handleClick = () => {
    console.log('Button clicked!!');
  };

  return (
    <div>
      <div>
        <Button success rounded outline onClick={handleClick} className="mb-5">
          <GoBell />
          Rótulo 1
        </Button>
      </div>
      <div>
        <Button danger outline>
          Rótulo 2
        </Button>
      </div>
      <div>
        <Button warning>Rótulo 3</Button>
      </div>
      <div>
        <Button secondary outline>
          Rótulo 4
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Rótulo 5
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
