pub contract CodeMarketplace {

    pub struct CodeListing {
        pub let id: UInt64
        pub let owner: Address
        pub let title: String
        pub let description: String
        pub let price: UFix64
        pub let codeHash: String
        pub let active: Bool

        init(
            id: UInt64,
            owner: Address,
            title: String,
            description: String,
            price: UFix64,
            codeHash: String
        ) {
            self.id = id
            self.owner = owner
            self.title = title
            self.description = description
            self.price = price
            self.codeHash = codeHash
            self.active = true
        }
    }

    pub var listings: {UInt64: CodeListing}
    pub var nextListingID: UInt64

    pub event ListingCreated(id: UInt64, owner: Address, price: UFix64)
    pub event ListingSold(id: UInt64, buyer: Address, price: UFix64)
    pub event ListingRemoved(id: UInt64)

    init() {
        self.listings = {}
        self.nextListingID = 1
    }

    pub fun createListing(
        title: String,
        description: String,
        price: UFix64,
        codeHash: String
    ) {
        let listing = CodeListing(
            id: self.nextListingID,
            owner: self.account.address,
            title: title,
            description: description,
            price: price,
            codeHash: codeHash
        )

        self.listings[self.nextListingID] = listing

        emit ListingCreated(
            id: self.nextListingID,
            owner: self.account.address,
            price: price
        )

        self.nextListingID = self.nextListingID + 1
    }

    pub fun purchaseListing(listingID: UInt64) {
        pre {
            self.listings[listingID] != nil: 'Listing does not exist'
            self.listings[listingID]?.active == true: 'Listing is not active'
        }

        let listing = self.listings[listingID]!
        
        // Payment logic would go here
        
        emit ListingSold(
            id: listingID,
            buyer: self.account.address,
            price: listing.price
        )
    }

    pub fun removeListing(listingID: UInt64) {
        pre {
            self.listings[listingID] != nil: 'Listing does not exist'
            self.listings[listingID]?.owner == self.account.address: 'Only owner can remove listing'
        }

        self.listings.remove(key: listingID)
        
        emit ListingRemoved(id: listingID)
    }
}
