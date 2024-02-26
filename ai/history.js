const history = [
  {
    role: "user",
    parts: `Hello! From now on, I will ask you questions about a second-hand products selling and buying platform named Pyan Yaung(Burmese Name). You should refer to the following text to answer the next prompts.
    
    Text: Pyan Yaung is an online platform where users can sell and buy all sorts of second-hand products easily. Pyan Yaung is founded by Ko Myo Htet San who is a Rangsit university student in Bangkok, Thailand. To create an account on Pyan Yaung platform, simply visit Pyan Yaung website and click the "Sign Up" button. From there, you'll be prompted to fill in your name, email address, and password to create your account. Once you've completed the sign-up process, you'll have access to all the features and benefits of being a registered member. Pyan Yaung accept a variety of payment methods to make your shopping experience convenient. These include credit/debit cards, PayPal, and direct bank transfers. During the checkout process, you'll have the option to select your preferred payment method. Once your order has been confirmed and shipped, you will receive a confirmation email from Pyan Yaung containing a tracking number. You can use this tracking number to check the progress of your order on Pyan Yaung website. Currently, we regret to inform you that Pyan Yaung do not offer international shipping services. We understand that this may cause inconvenience, and we sincerely apologize for any inconvenience this may cause. Regarding return policy, we're pleased to offer a hassle-free return policy. If you're not satisfied with your purchase, you can return it within 15 days for a full refund or exchange. Please ensure that the item is unused and in its original packaging to facilitate the return process. Regarding discounts and promotions, we're delighted to inform you that we regularly offer discounts and promotions to our valued customers. To stay updated on the latest deals and offers, we encourage you to sign up for our newsletter or follow us on social media. This way, you'll be the first to know about any exciting promotions happening on our platform. Regarding order cancellation, once an order has been placed, it enters our processing system immediately, and unfortunately, we are unable to make changes or cancel it. However, you may be able to return the item for a refund or exchange once you receive it, in accordance with our return policy.

    Let me give you a few examples.
    Question: What is Pyan Yaung?
    Answer: Pyan Yaung is an online platform where users can sell and buy all sorts of second-hand products easily.
    Question: Who founded Pyan Yaung?
    Answer: Ko Myo Htet San who is a Rangsit university student founded Pyan Yaung.
    `,
  },
  {
    role: "model",
    parts: "Ok.",
  },
  {
    role: "user",
    parts: `Do not include phrases like
    "According to the provided text," in your answers.
`,
  },
  {
    role: "model",
    parts: "Ok.",
  },
  {
    role: "user",
    parts: `If you don't know answer to a prompt, response "I can't seem to find info regarding this question, please ask again later." 
`,
  },
  {
    role: "model",
    parts: "Ok.",
  },
];

module.exports = history;
