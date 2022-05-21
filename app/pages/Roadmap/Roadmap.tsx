import { InfoSidebar } from "@/common";

export const Roadmap = () => {
  return (
    <InfoSidebar>
      <h1>Roadmap</h1>
      <div className="info__block">
        <p className="info__block-title">Treasury Fund:​</p>
        <ul className="info__block-list">
          <li>
            Treasury funds will be used by the team for expenses and continued
            development and management
          </li>
          <li>
            Initially the treasury will contain the allotted Treasury and DAO
            funds.
          </li>
          <li>
            Treasury will be allocated to maximize yield and minimize risk.
            Through UST holdings in Anchor (19,5%~), direct Luna staking, and
            Prism refracting. Future allocations will be voted on via the DAO
            once established, and the risk levels of each allotment can be
            decided by the community.
          </li>
          <li>
            Yield will be used to buy up floor priced Anarchists. The number
            purchased would vary depending on the current floor price, and the
            generated yield.
          </li>
        </ul>
      </div>
      <div className="info__block">
        <p className="info__block-title">
          2. Treasury contains raised funds from the initial sale — and a
          percentage of the secondary market
        </p>
      </div>
      <div className="info__block">
        <p className="info__block-title">
          3. Faction Leaders: A few community leaders from each of the factions
        </p>
        <ul className="info__block-list">
          <li>
            A few community leaders from each of the factions will be chosen as
            the liaison with their community
          </li>
        </ul>
      </div>
      <div className="info__block">
        <p className="info__block-title">4. Anarchist Spotlight:</p>
        <ul className="info__block-list">
          <li>
            Gallery and rarity checkers. A site for searching the entire
            collection, viewing your own, as well as exploring the overall
            stats. The gallery will also contain super high-resolution versions
            of your minted NFTs!
          </li>
        </ul>
      </div>
      <div className="info__block">
        <p className="info__block-title">5. AnarchistDAO:</p>
        <ul className="info__block-list">
          <li>
            Pending community holder vote, a DAO can be formed. Upon successful
            execution, a portion of the mint funds will be transferred into this
            newly formed DAO to be owned and used by the community. The team
            will abstain from this initial vote.
          </li>
          <li>
            NFT holders can begin voting on proposals and asset allocations
          </li>
          <li>
            Secure whitelist spots in other projects that get assigned to random
            Anarchist holders
          </li>
          <li>
            Partner with other projects as early seed investments (based on DAO
            votes), to try and secure discounted tokens and airdrop to holders
          </li>
        </ul>
      </div>
      <div className="info__block">
        <p className="info__block-title">6. Merch Store (TBD):</p>
        <ul className="info__block-list">
          <li>
            If approved by the DAO, a merch store can be created. The community
            can decide to allocate a portion of DAO funds for the initial setup.
            This would include any expenses to start the shop and have the art
            generated for the merch. Using PayWithTerra we will be able to
            natively accept UST to purchase AOT merchandise. Profits will be
            distributed back into the DAO. A trustee can be nominated to operate
            this merch store. The community can vote it to be the team members
            itself, or a third party with more experience in this field.
          </li>
        </ul>
      </div>
      <div className="info__block">
        <p className="info__block-title">7. Holder snapshots:</p>
        <ul className="info__block-list">
          <li>
            We will perform snapshots on wallets holding the NFTs for airdrops
            and giveaways. This could include our comics, additional NFTs from
            our future collections, or NFTs from potential partnerships and
            collaborations. If the established DAO votes on any holder rewards,
            these snapshots will be used to determine holders at certain points
            in time. Snapshot dates and rules will always be published in
            advanced. Some may simply be a point in time hold, while others may
            be the delta of two snapshots.
          </li>
        </ul>
      </div>
      <div className="info__block">
        <p className="info__block-title">8. Interchain Assets:</p>
        <ul className="info__block-list">
          <li>
            With the IBC introduction of Interchain Accounts, the DAO will be
            able to execute smart contracts on other IBC enabled chains. This
            opens up further possibility of yield farming, and purchasing NFTs
            on other chains if the DAO so chooses to.
          </li>
        </ul>
      </div>
      <h2>Anarchist Supply Breakdown:</h2>
      <div className="info__block">
        <p className="info__block-title">2,500 Total Mint:</p>
        <ul className="info__block-list">
          <li>25 held by the team for initial giveaways / prizes</li>
          <li>50 for the Psychedelic Sloth community (Final number TBD)</li>
          <li>
            500 whitelist spots (3 max mint per wallet; Max Supply of 1250)
          </li>
          <li>Remaining for public mint (no mint limit)</li>
        </ul>
      </div>
      <div className="info__block">
        <p className="info__block-title">Mint Breakdown:</p>
        <ul className="info__block-list">
          <li>25 held by the team for initial giveaways / prizes</li>
          <li>50 for the Psychedelic Sloth community (Final number TBD)</li>
          <li>
            500 whitelist spots (3 max mint per wallet; Max Supply of 1250)
          </li>
          <li>Remaining for public mint (no mint limit)</li>
        </ul>
      </div>
      <div className="info__block">
        <p className="info__block-title">Secondary Sales Breakdown:</p>
        <ul className="info__block-list">
          <li>40% to Launch Partner</li>
          <li>10% to Treasury</li>
          <li>25% to DAO</li>
          <li>25% to Team</li>
        </ul>
      </div>
    </InfoSidebar>
  );
};
