import { useEffect, useState } from "react";
import * as fcl from "@onflow/fcl";

export default function Home() {
  const [listings, setListings] = useState({});

  useEffect(() => {
    fetchListings();
  }, []);

  const fetchListings = async () => {
    const response = await fcl.query({
      cadence: `
        import CodeMarketplace from 0x9d2ade18cb6bea1a

        pub fun main(): {UInt64: CodeMarketplace.CodeListing} {
          return CodeMarketplace.listings
        }
      `,
    });
    setListings(response);
  };

  return (
    <div>
      <h1>Code Marketplace</h1>
      <ul>
        {Object.values(listings).map((listing) => (
          <li key={listing.id}>
            <h2>{listing.title}</h2>
            <p>{listing.description}</p>
            <p>Price: {listing.price}</p>
            <button onClick={() => purchaseListing(listing.id)}>Buy</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
