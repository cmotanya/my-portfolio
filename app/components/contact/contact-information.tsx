import { IconClock, IconMapPin, IconPhone } from "@tabler/icons-react";

const ContactInformation = () => {
  return (
    <div>
      <div className="md:px-6 md:py-8">
        <h3 className="mb-6 text-xl font-medium">Contact Information</h3>
        <div className="space-y-6">
          <div className="flex items-start">
            <IconPhone
              className="mr-3 h-6 w-6 flex-shrink-0 text-primary"
              stroke={1.5}
            />
            <div>
              <p className="text-lg font-medium">Phone</p>
              <p className="mt-1 text-base text-800">+254 712 909 475</p>
            </div>
          </div>
          <div className="flex items-start">
            <IconMapPin
              className="mr-3 h-6 w-6 flex-shrink-0 text-primary"
              stroke={1.5}
            />
            <div>
              <p className="text-lg font-medium text-900">Address</p>
              <p className="mt-1 text-base text-600">
                Mwembe Tayari, Mombasa
                <br />
                Coast, Kenya
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <IconClock
              className="mr-3 h-6 w-6 flex-shrink-0 text-primary"
              stroke={1.5}
            />
            <div>
              <p className="text-lg font-medium text-900">Business Hours</p>
              <p className="mt-1 text-base text-600">
                Monday - Friday: 9am - 5pm
                <br />
                Saturday: 10am - 2pm
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
        {/* You can add a map here if desired */}
        <div className="mt-8 rounded-lg bg-accent p-4">
          <p className="text-center text-gray-600">Map placeholder</p>
        </div>
      </div>
    </div>
  );
};
export default ContactInformation;
