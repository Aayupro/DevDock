Devdock Code Selling Marketplace
A decentralized marketplace for buying and selling code snippets. Built with Flow Blockchain and Next.js.

Features

List Code: Users can list their code snippets for sale.
Purchase Code: Buyers can securely purchase code listings.
Decentralized: Built on the Flow blockchain for transparency and security.
User-Friendly Interface: Easy-to-use web interface for listing and purchasing code.
Technologies Used

Flow Blockchain: For decentralized storage and transactions.
Cadence: Smart contract language for the Flow blockchain.
Next.js: Frontend framework for building the user interface.
React: For building interactive UI components.
Flow Client Library (FCL): For interacting with the Flow blockchain from the frontend.
Prerequisites

Before running the project, ensure you have the following installed:

Node.js: Download Node.js
Flow CLI: Install Flow CLI
Git: Install Git
Setup Instructions

1. Clone the Repository

Clone the repository to your local machine:

bash
Copy
git clone https://github.com/Aayupro/DevDock.git
cd DevDock
2. Install Dependencies

Install the required dependencies for the frontend:

bash
Copy
cd web
npm install
3. Start the Flow Emulator

Start the Flow emulator to simulate the Flow blockchain locally:

bash
Copy
flow emulator start
4. Deploy the Smart Contract

Deploy the CodeMarketplace smart contract to the emulator:

bash
Copy
flow project deploy
5. Run the Frontend

Start the Next.js development server:

bash
Copy
npm run dev
Visit http://localhost:3000 in your browser to access the application.

Usage

1. List Code for Sale

Navigate to the Create Listing page.
Fill in the details:
Title: Name of the code snippet.
Description: Brief description of the code.
Price: Price in FLOW tokens.
Code Hash: Hash of the code (e.g., IPFS hash).
Click List Code to create the listing.
2. Purchase Code

Browse the Home Page to view available listings.
Click Buy on the listing you want to purchase.
Confirm the transaction in your Flow wallet.
3. Remove a Listing

Only the owner of a listing can remove it.
Navigate to the listing and click Remove.
Project Structure

Copy
DevDock/
├── contracts/
│   └── CodeMarketplace.cdc          # Smart contract code
├── scripts/
│   └── GetListings.cdc              # Script to fetch listings
├── transactions/
│   ├── BuyCode.cdc                  # Transaction to buy code
│   └── ListCode.cdc                 # Transaction to list code
├── web/                             # Frontend code
│   ├── pages/                       # Next.js pages
│   │   ├── index.js                 # Home page
│   │   └── create.js                # Create listing page
│   ├── package.json                 # Frontend dependencies
│   └── README.md                    # Frontend README
├── flow.json                        # Flow project configuration
└── README.md                        # Project README
Smart Contract Details

The CodeMarketplace smart contract provides the following functionality:

Create Listing: Users can list code for sale.
Purchase Listing: Buyers can purchase listed code.
Remove Listing: Owners can remove their listings.
Events

ListingCreated: Emitted when a new listing is created.
ListingSold: Emitted when a listing is purchased.
ListingRemoved: Emitted when a listing is removed.
