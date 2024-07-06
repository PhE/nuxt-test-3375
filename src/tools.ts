import type { Provider } from "@supabase/supabase-js"


// get social login to show on login page, overloading from env var
export function getSocialLoginProviders(): Provider[] {
    //TODO: move to env var
    return [
            "github",
            "google",
            "linkedin_oidc",
            "gitlab",
            //"apple",
        ]
}
