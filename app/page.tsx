import { Button } from "@heroui/button";
import Image from "next/image";
import { GoSmiley } from "react-icons/go";

export default function Home() {
  return (
    <div>
       <h1 className="text-3xl">HEllO world </h1> 
       <Button
       color="danger"
       variant="bordered"
       startContent={<GoSmiley/>}
       >
        Click ME
       </Button>
    </div>
  );
}
