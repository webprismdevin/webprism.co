export function returnStatement(step: number) {
  switch (step) {
    case 0:
      return "Hover over a step";

    case 1:
      return "We start our process by understanding your goals for your project and what a successful completion looks like to you. Don’t worry if you don’t have all the answers, we can help by asking the right questions.";

    case 2:
      return "Once we’ve officially decided to work together, we’ll dive deep into your brand to understand how to authentically represent your team, and business. We can also help you get more clarity, create logos & establish a visual identity for your brand.";
    case 3:
      return "Before we design anything, we’ll craft exactly what will be communicated on your site. The content we decide on informs the design and how we visually communicate to visitors, so we do this first.";
    case 4:
      return "We take the written content, identify the tone being conveyed, and establish the overall vibe. From there, we craft a website design that will visually communicate your brand’s unique personality and character to your audience. This part of the process is iterative, explorative, and tons of fun.";
    case 5:
      return "With copy written and the design complete, building your website becomes a breeze. We'll have our head down until we have something beautiful and interactive to review together.";
    case 6:
      return "Launch Day is our favorite day! We're present through the entire go-live process. We provide a 'launch package' to help your organization promote and drive visitors to your new website.";
    case 7:
      return "Now it's time to leverage your new asset into traffic and awareness. We can help your team climb the search rankings, create shareable content to drive new traffic, and acquire new customers.";
    default:
      return "something has gone horribly wrong!";
  }
}
