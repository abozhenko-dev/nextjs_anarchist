import { InfoSidebar } from "@/common";

export const Disclosure = () => {
  return (
    <InfoSidebar>
      <h1>Risk disclosure</h1>
      <div className="info__block">
        <div className="info__block-text">
          <p>
            As with everything in the crypto space, there are varying degrees of
            risk; and with NFTs that is no different. While there is no
            guarantee of profit or returns, the team will work towards creating
            as much value and utility for token holders. This is done through
            additional partnerships/collaborations, and delivery and execution
            on the roadmap. While funds are allocated on the side for a
            community vote, the initial purchase of the NFT is for the art, and
            community access. The formation and use of the community funds will
            be entirely up to the community itself. The team will abstain from
            any structural formation votes and only get involved for the initial
            setup and fund transfer. We will aim to be as transparent as
            possible. Potential value includes...
          </p>
        </div>
      </div>

      <div className="info__block">
        <p className="info__block-title">Primary risk:</p>
        <ul className="info__block-list">
          <li>Regulatory Restrictions</li>
          <li>Technology Issues</li>
          <li>Market Sentiment​</li>
        </ul>
      </div>
      <div className="info__block">
        <p className="info__block-title">Regulatory Restrictions:</p>
        <div className="info__block-text">
          <p>
            As there is no clear guidelines on what can or can not be done
            within this space, we understand there is potential risk if future
            regulations hinder the space. We will continue to operate and adopt
            to any compliance and regulatory requirements.
          </p>
        </div>
      </div>
      <div className="info__block">
        <p className="info__block-title">Technology Issues:</p>
        <div className="info__block-text">
          <p>
            As the space is still rapidly evolving, technology or blockchain
            could potentially lead to protocol failures. In the event that the
            Terra blockchain no longer exists, it may not be possible to trade,
            sell or transfer purchased NFTs. In this unlikely event, we will
            weigh our options and explore the options of bridging to another
            chain. Additionally, while we will seek extensive audits on any new
            smart contracts we deploy, due to this being new and emerging
            technology, the risk of exploitation and technical failure always
            exists. In the event of any unforeseen events, we will do our best
            to mitigate the risk and solve the issues.
          </p>
        </div>
      </div>
      <div className="info__block">
        <p className="info__block-title">Market Sentiment:</p>
        <div className="info__block-text">
          <p>
            As crypto goes through varying market sentiments, in a down or bear
            market the demand for NFTs may be reduced. This could lead to an
            increased in difficulty in selling your NFTs, or their value may
            decrease. We will aim to still continue purchasing up floor priced
            NFTs to help create upwards buy pressure to try and help mitigate
            this.
          </p>
        </div>
      </div>
      <div className="info__block">
        <p className="info__block-title">Dissolution:</p>
        <div className="info__block-text">
          <p>
            While we do not foresee any events that could potentially lead to
            this, we want to be transparent in our plans. In the event that the
            DAO needs to be dissolved, the remaining assets will be distributed
            to holders after a successful governance vote passes. The treasury
            will be distributed to the team, while the DAO to the NFT holders.
            This is a last case resort, and we will aim to be as transparent as
            possible during the process. This disclaimer has been put in place
            in the sake of transparency, and to help answer any questions
            holders may have. It is subject to change at any time with the
            evolving crypto landscape.
          </p>
        </div>
      </div>
    </InfoSidebar>
  );
};
