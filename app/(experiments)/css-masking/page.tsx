import styles from "./page.module.css";

export default function Page() {
  return <main className="grid place-items-center h-full">
    <div className="w-[500px] h-[400px] bg-neutral-900 rounded-md inset-shadow-[0_3px_0_-2px_var(--color-neutral-800),0_-3px_0_-2px_var(--color-neutral-950)] overflow-hidden">
      <div className={`h-full overflow-auto ${styles.scroller}`}>
        <p className={`p-4 pb-16 ${styles.content}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, deleniti dignissimos tempora nihil praesentium temporibus magnam ad pariatur rem officiis vero totam quaerat magni eos nesciunt alias est qui accusantium.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, deleniti dignissimos tempora nihil praesentium temporibus magnam ad pariatur rem officiis vero totam quaerat magni eos nesciunt alias est qui accusantium.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, deleniti dignissimos tempora nihil praesentium temporibus magnam ad pariatur rem officiis vero totam quaerat magni eos nesciunt alias est qui accusantium.     Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, deleniti dignissimos tempora nihil praesentium temporibus magnam ad pariatur rem officiis vero totam quaerat magni eos nesciunt alias est qui accusantium.     Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, deleniti dignissimos tempora nihil praesentium temporibus magnam ad pariatur rem officiis vero totam quaerat magni eos nesciunt alias est qui accusantium.     Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, deleniti dignissimos tempora nihil praesentium temporibus magnam ad pariatur rem officiis vero totam quaerat magni eos nesciunt alias est qui accusantium.     Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, deleniti dignissimos tempora nihil praesentium temporibus magnam ad pariatur rem officiis vero totam quaerat magni eos nesciunt alias est qui accusantium.
        </p>
      </div>
    </div>
  </main>
}
