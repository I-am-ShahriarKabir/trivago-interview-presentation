# Trivago Interview Presentation

This is a Next.js project I created for my Trivago interview presentation. It features a slide-based presentation with navigation controls and fullscreen capabilities.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/I-am-ShahriarKabir/trivago-interview-presentation.git
   cd trivago-interview-presentation
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Set up environment variables:
   - Copy the `.env.example` file to `.env.local`:
     ```bash
     cp .env.example .env.local
     ```
   - Edit `.env.local` and update the values as needed.

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the presentation.

## Presentation Controls

- Use the "Previous" and "Next" buttons to navigate through slides.
- Use the left and right arrow keys for keyboard navigation.
- Press 'F' or click the fullscreen button to toggle fullscreen mode.

## Project Structure

- `app/page.tsx`: The main page component.
- `components/Presentation.tsx`: The presentation component with slides and navigation logic.

## Customizing the Presentation

To modify the presentation content, edit the `slides` array in `components/Presentation.tsx`. Each slide object can have the following properties:

- `title`: The main title of the slide
- `content`: Primary content text
- `subContent`: Secondary content text
- `highlights`: An array of bullet points or highlights

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deployment

This project can be easily deployed on [Vercel](https://vercel.com/), the platform from the creators of Next.js. For more details, check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment).
