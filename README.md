#Development 
The development for this site is fairly straight forward, with React used throughout.  The main UI components are mostly created via a MUI theme.  HashRouter is useded instead of BrowserRouter and this is to get around a limitation github-pages when it comes url resolutions when a specific page is requested.  Without HashRouter, www.desiredurl.com/contact would get a 404, and instead it resolves to www.desiredurl.com/#/contact which does work.

#Deployment
The deployment steps make use of the gh-pages package.  Reading the below is a pretty good summary of how to refresh the deployment, assuming you have the relevant access to the repo.
https://github.com/gitname/react-gh-pages

#DNS and SSL
The nameservers are pointing to Cloudflare for proxying.  This allows their universal certs to be used for providing SSL to github pages, so that the site can be secured and users don't get a security warning when visiting the site.

#GoDaddy
A and AAAA records were created within GoDaddy's domain management suite.  This is done so that the desired web address can be used in the browser to resolve the gh-pages hosted site.