import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu" className="mb-3">
        &larr; Back to menu
      </LinkButton>
      <p className="mt-7 text-xl font-semibold">
        Your cart is still empty, Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
