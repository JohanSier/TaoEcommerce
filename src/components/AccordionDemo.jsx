import * as React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import "../styles/accordion.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const AccordionDemo = ({ description, onSecondItemOpen }) => {
	const { id } = useParams();
	const [selectedAccordion, setSelectedAccordion] = useState("none");

	useEffect(() => {
		setSelectedAccordion("none"); // Se cierra el acordeón al cambiar la ruta
	}, [id]);

	// Condicional para aplicar el estilo
	const isSecondItemOpen = selectedAccordion === "item-2";

	useEffect(() => {
		onSecondItemOpen(isSecondItemOpen);
	}, [isSecondItemOpen, onSecondItemOpen]);

	const accordionRootClass = classNames("AccordionRoot", {
		"AccordionRoot--expanded": isSecondItemOpen,
	});

	return (
		<Accordion.Root
			className={accordionRootClass}
			type="single"
			collapsible
			value={selectedAccordion} // Se controla el estado
			onValueChange={setSelectedAccordion} // Se actualiza cuando se abre/cierra
		>
			<Accordion.Item className="AccordionItem" value="item-1">
				<AccordionTrigger>Product Description</AccordionTrigger>
				<AccordionContent>{description}</AccordionContent>
			</Accordion.Item>

			<Accordion.Item className="AccordionItem" value="item-2">
				<AccordionTrigger>Shipping and Returns</AccordionTrigger>
				<AccordionContent>
					TaoHoops processes orders in 1-3 business days, with delivery in 5-10 days.
					<br />
					<br />
					Returns are accepted within 14 days if items are unworn and in original condition.
					<br />
					<br />
					Shipping costs are non-refundable, and return shipping is the customer's responsibility.
					<br />
					<br />
					For defects or wrong items, contact us immediately. More details on our policy page.
				</AccordionContent>
			</Accordion.Item>
		</Accordion.Root>
	);
};

const AccordionTrigger = React.forwardRef(
	({ children, className, ...props }, forwardedRef) => (
		<Accordion.Header className="AccordionHeader">
			<Accordion.Trigger
				className={classNames("AccordionTrigger", className)}
				{...props}
				ref={forwardedRef}
			>
				{children}
				<ChevronDownIcon className="AccordionChevron" aria-hidden />
			</Accordion.Trigger>
		</Accordion.Header>
	),
);

const AccordionContent = React.forwardRef(
	({ children, className, ...props }, forwardedRef) => (
		<Accordion.Content
			className={classNames("AccordionContent", className)}
			{...props}
			ref={forwardedRef}
		>
			<div className="AccordionContentText">{children}</div>
		</Accordion.Content>
	),
);

export default AccordionDemo;
