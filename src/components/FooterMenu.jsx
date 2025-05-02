import Icons from "./Icons";

const FooterMenu = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 text-xs px-4 md:px-20">
      <div>
        <Icons image={(<><svg
      height="44"
      viewBox="0 0 14 44"
      width="14"
      fill="#1d1d1fe7"
      className="hover:fill-black"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"></path>
    </svg></>)}/>
      </div>
      <div className="max-w-5xl mx-auto grid grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 gap-x-2 gap-y-10">
        {/* Column 1 */}
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-[#1f1f1f]">Shop and Learn</h4>
            <ul className="mt-2 space-y-1">
              <li>Store</li>
              <li>Mac</li>
              <li>iPad</li>
              <li>iPhone</li>
              <li>Watch</li>
              <li>AirPods</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#1f1f1f]">Apple Wallet</h4>
            <ul className="mt-2 space-y-1">
              <li>Wallet</li>
            </ul>
          </div>
        </div>

        {/* Column 2 */}
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-[#1f1f1f]">Account</h4>
            <ul className="mt-2 space-y-1">
              <li>Manage Your Apple ID</li>
              <li>Apple Store Account</li>
              <li>iCloud.com</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#1f1f1f]">Entertainment</h4>
            <ul className="mt-2 space-y-1">
              <li>Apple One</li>
              <li>Apple TV+</li>
              <li>Apple Music</li>
              <li>Apple Arcade</li>
            </ul>
          </div>
        </div>

        {/* Column 3 */}
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-[#1f1f1f]">Apple Store</h4>
            <ul className="mt-2 space-y-1">
              <li>Find a Store</li>
              <li>Genius Bar</li>
              <li>Today at Apple</li>
              <li>Ways to Buy</li>
            </ul>
          </div>
        </div>

        {/* Column 4 */}
        <div className="space-y-6">
        <div>
            <h4 className="font-semibold text-[#1f1f1f]">For Education</h4>
            <ul className="mt-2 space-y-1">
              <li>Apple and Education</li>
              <li>Shop for Education</li>
              <li>Shop for University</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#1f1f1f]">For Business</h4>
            <ul className="mt-2 space-y-1">
              <li>Apple and Business</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#1f1f1f]">For Healthcare</h4>
            <ul className="mt-2 space-y-1">
              <li>Apple in Healthcare</li>
              <li>Health on Apple Watch</li>
            </ul>
          </div>
        </div>

        {/* Column 5 */}
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-[#1f1f1f]">Apple Values</h4>
            <ul className="mt-2 space-y-1">
              <li>Accessibility</li>
              <li>Environment</li>
              <li>Privacy</li>
              <li>Supply Chain</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#1f1f1f]">About Apple</h4>
            <ul className="mt-2 space-y-1">
              <li>Newsroom</li>
              <li>Apple Leadership</li>
              <li>Career Opportunities</li>
              <li>Investors</li>
            </ul>
          </div>
        </div>
        <hr className="text-gray-300 w-full"/>
      </div>
    </footer>
  );
};

export default FooterMenu;