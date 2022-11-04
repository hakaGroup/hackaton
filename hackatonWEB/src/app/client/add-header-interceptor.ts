import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http"
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

export class AddHeaderInterceptor implements HttpInterceptor {
    public constructor(private loginService: AuthService){    
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        var clonedRequest: HttpRequest<any>;
        var token = this.loginService.token;
        if (token) {
            clonedRequest = req.clone({
                headers: req.headers.append('Authorization', `Bearer ${token}`)
            });
        }

        return next.handle(req);
    }
}