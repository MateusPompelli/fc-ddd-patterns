import EventHandlerInterface from "../../../@shared/event/event-handler.interface";
import CustomerCreatedEvent from "../customer-created.event";
import UpdateAddressEvent from "../update-address.event";

export default class EnviaConsoleLogHandler
  implements EventHandlerInterface<UpdateAddressEvent>
{
  handle(event: UpdateAddressEvent): void {
    console.log(event);
    console.log(
      `Endereço do cliente: ${event.eventData.id}, ${event.eventData.name} alterado para: ${event.eventData.address}`
    );
  }
}
