const FooterMenu = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 text-xs px-4 py-10 md:px-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-x-2 gap-y-10">
        {/* Column 1 */}
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-black">Shop and Learn</h4>
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
            <h4 className="font-semibold text-black">Apple Wallet</h4>
            <ul className="mt-2 space-y-1">
              <li>Wallet</li>
            </ul>
          </div>
        </div>

        {/* Column 2 */}
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-black">Account</h4>
            <ul className="mt-2 space-y-1">
              <li>Manage Your Apple ID</li>
              <li>Apple Store Account</li>
              <li>iCloud.com</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-black">Entertainment</h4>
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
            <h4 className="font-semibold text-black">Apple Store</h4>
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
            <h4 className="font-semibold text-black">For Education</h4>
            <ul className="mt-2 space-y-1">
              <li>Apple and Education</li>
              <li>Shop for Education</li>
              <li>Shop for University</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-black">For Business</h4>
            <ul className="mt-2 space-y-1">
              <li>Apple and Business</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-black">For Healthcare</h4>
            <ul className="mt-2 space-y-1">
              <li>Apple in Healthcare</li>
              <li>Health on Apple Watch</li>
            </ul>
          </div>
        </div>

        {/* Column 5 */}
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-black">Apple Values</h4>
            <ul className="mt-2 space-y-1">
              <li>Accessibility</li>
              <li>Environment</li>
              <li>Privacy</li>
              <li>Supply Chain</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-black">About Apple</h4>
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