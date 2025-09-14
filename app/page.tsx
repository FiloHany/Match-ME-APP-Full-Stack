import { Button} from "@heroui/button";
import { Link } from "@heroui/link";
import Image from "next/image";
import { FaRegSmile } from "react-icons/fa";

export default function Home() {
  return (
    <div>
       <h1 className="text-3xl">HEllO world </h1> 
       <Button
       as={Link}
       href="/members"
       color="primary"
       variant="bordered"
       startContent={<FaRegSmile size={20}/>}
       >
        Click ME
       </Button>
    </div>
  );
}
