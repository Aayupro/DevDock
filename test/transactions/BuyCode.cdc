import CodeMarketplace from 0x9d2ade18cb6bea1a

transaction(listingID: UInt64) {
    prepare(signer: AuthAccount) {}

    execute {
        CodeMarketplace.purchaseListing(listingID: listingID)
    }
}
