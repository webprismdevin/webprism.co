export function returnStatement(step: number) {
  switch (step) {
    case 0:
      return "Hover over a step";

    case 1:
      return "We start our process by understanding your goals for your project and what a successful completion looks like to you. Don’t worry if you don’t have all the answers, we can help with the right questions.";

    case 2:
      return "Once we’ve officially decided to work together, we’ll dive deep into your brand to understand how to authentically represent your team, and business. We can also help you get more clarity, create logos & establish a visual identity for your brand.";
    case 3:
      return "Before we design anything, we’ll craft exactly what will be communicated on your site. The decided content informs the design and how we visually communicate to visitors, so we do this first.";
    case 4:
      return "We take the written content, identify the tone being conveyed, and establish the overall vibe. From there, we craft a website design that will visually communicate the your brand’s unique personality and character to your audience. This part of the process is iterative, explorative, and tons of fun.";
    case 5:
      return "With copy written, and a design complete, build our design becomes a breeze. We'll have our head down until we have something beautiful and interactive to review together.";
    case 6:
      return "Launch day is our favorite day! We’re present through the entire go-live process, providing a “launch package” for your organization to share, and help drive visits to your new site!";
    case 7:
      return "Now it’s time to leverage your new asset into traffic, and awareness. We can help your team climb the search rankings, create shareable content to drive new traffic and acquire new customers.";
    default:
      return "something has gone horribly wrong!";
  }
}
