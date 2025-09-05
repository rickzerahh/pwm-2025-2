import { Contador } from "@/components/Contador";
import { MyButton } from "@/components/MyButton";
import { ProductsList } from "@/components/ProductsList";

export default function Home() {
  let PI = 3.14159;
  return (
    <div>
      <h1>Welcome to my app</h1>
      <hr />
      <Contador />
      <Contador />
      <hr />
      <ProductsList />
      <hr />
      <p>
        Hello there.
        <br />
        <span className="blueText">How do you do?</span>
      </p>
      <MyButton />
      <p>Doing math: {2 * PI}</p>
      <hr />
      <img
        className="avatar"
        src="https://www.w3schools.com/howto/img_avatar.png"
        width={100}
        height={100}
      />
    </div>
  );
}
