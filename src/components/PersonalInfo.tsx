import Register from "./Register";
import SignIn from "./SignIn";

export default function PersonalInfo() {

    return (
        <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8 md:max-h-80">
            <div className="">
                <SignIn  />
            </div>
            <div className="">
                <Register />
            </div>
        </div>
    )
}