const Blog = () => {

  return (
    <div className="container mx-auto">
      <div className="mb-5">
        <h3 className="text-2xl font-bold">Q-1: What is cors?</h3>
        <p><span className="underline font-bold mr-3">Ans:</span> Cross-origin resource sharing (CORS) is the mechanism that provides the ability to alter the behavior of this policy, enabling you to do things like hosting static content at www.example.com and the backend API at api.example.com. This kind of request would be called a Cross-Origin request, as a resource from one subdomain is requesting a resource from another subdomain. This is all controlled through preflight requests that exchange a set of HTTP request headers and corresponding response headers collectively referred to as "CORS Headers", each of these headers modifies a different element of the Same-Origin policy to loosen the limitations it imposes. There's a lot of terrible advice out there (especially on popular forums) on how to set this up where the answers generally include some variant of brutally setting wildcard "*" response headers regardless of the request headers provided in the pre-flight request. This article attempts to dispel some of the common misconceptions about Cross-Origin Resource Sharing and provide useful advice on how to get things working correctly.</p>
      </div>
      <div className="mb-5">
        <h3 className="text-2xl font-bold">Q-2: Why are you using firebase? What other options do you have to implement authentication?</h3>
        <p><span className="underline font-bold mr-3">Ans:</span> The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience. Indeed, Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps. We want to consider leveraging this tool if ywe eventually wish to host and manage our app in the cloud. Being serverless, Firebase removes the need to worry about the technicalities of cloud server configuration. As a Google Cloud service, it also gives us access to other Google products and features, like Google Drive and Sheets. For instance, we can import dummy data from Google Sheets and use it temporarily to serve your app. With Firebase, it's pretty simple to connect and use built-in third-party authentication providers, including Google, Facebook, Twitter, among others. And if we want to use a pre-built authentication UI, we have it at our disposal as well.</p>
        <ol className="list-decimal font-bold ml-8 mt-3">
          <li>Cookie-Based authentication</li>
          <li>Token-Based authentication</li>
          <li>Third party access(OAuth, API-token)</li>
          <li>OpenId</li>
          <li>SAML</li>
        </ol>
      </div>
      <div className="mb-5">
        <h3 className="text-2xl font-bold">Q-3: How does the private route work?</h3>
        <p><span className="underline font-bold mr-3">Ans:</span> PrivateRoute component is the blueprint for all private routes in the application. The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
      </div>
      <div className="mb-5">
        <h3 className="text-2xl font-bold">Q-4: What is Node? How does Node work?</h3>
        <p><span className="underline font-bold mr-3">Ans:</span> Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine (i.e. V8 engine) and executes JavaScript code outside a web browser, which was designed to build scalable network applications. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm, unifying web-application development around a single programming language, rather than different languages for server-side and client-side scripts.</p>
        <p>Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.</p>
      </div>
    </div>
  );
}

export default Blog;
