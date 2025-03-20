import { useState } from "react";
import * as fcl from "@onflow/fcl";

export default function CreateListing() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [codeHash, setCodeHash] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fcl.mutate({
      cadence: `
        import CodeMarketplace from 0x9d2ade18cb6bea1a

        transaction(
          title: String,
          description: String,
          price: UFix64,
          codeHash: String
        ) {
          prepare(signer: AuthAccount) {}

          execute {
            CodeMarketplace.createListing(
              title: title,
              description: description,
              price: price,
              codeHash: codeHash
            )
          }
        }
      `,
      args: (arg, t) => [
        arg(title, t.String),
        arg(description, t.String),
        arg(parseFloat(price), t.UFix64),
        arg(codeHash, t.String),
      ],
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Code Hash"
        value={codeHash}
        onChange={(e) => setCodeHash(e.target.value)}
      />
      <button type="submit">List Code</button>
    </form>
  );
}
